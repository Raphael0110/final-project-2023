import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getUserById, updateUserById } from '../../../../database/users';
import { User } from '../../../../migrations/1687259563-createUsers';
import { Error } from '../route';

type UserResponseBodyGet = { user: User } | Error;
type UserResponseBodyPut = { user: User } | Error;

const userSchema = z.object({
  username: z.string(),

  imageUrl: z.string(),
});

export async function GET(
  request: NextRequest,
  { params }: { params: Record<string, string | string[]> },
): Promise<NextResponse<UserResponseBodyGet>> {
  const userId = Number(params.userId);

  if (!userId) {
    return NextResponse.json({ error: 'Invalid User Id' }, { status: 400 });
  }
  const user = await getUserById(userId);

  if (!user) {
    return NextResponse.json(
      {
        error: 'User Not Found',
      },
      { status: 404 },
    );
  }

  return NextResponse.json({ user: user });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Record<string, string | string[]> },
): Promise<NextResponse<UserResponseBodyPut>> {
  const userId = Number(params.userId);
  const body = await request.json();

  if (!userId) {
    return NextResponse.json(
      {
        error: 'Invalid User Id',
      },
      { status: 400 },
    );
  }

  const result = userSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        error: 'The data is incomplete',
      },
      { status: 400 },
    );
  }

  const user = await updateUserById(
    userId,
    result.data.username,

    result.data.imageUrl,
  );

  if (!user) {
    return NextResponse.json(
      {
        error: 'User Not Found',
      },
      { status: 404 },
    );
  }

  return NextResponse.json({
    user: user,
  });
}
