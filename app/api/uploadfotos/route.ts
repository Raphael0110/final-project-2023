import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createfotos } from '../../../database/fotos';
import { Fotosidk } from '../../../migrations/1688721959-createTableImages';

type Error = {
  error: string;
};

export type RegisterResponseBodyPost =
  | {
      photo: Fotosidk;
    }
  | Error;

const photoSchema = z.object({
  url: z.string(),
  username: z.string(),
});

export async function POST(
  request: NextRequest,
): Promise<NextResponse<RegisterResponseBodyPost>> {
  const body = await request.json();

  console.log('body', body);
  console.log(typeof body.username);

  const result = photoSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        error: 'username or password missing',
      },
      { status: 400 },
    );
  }
  const newphoto = await createfotos(result.data.url, result.data.username);

  if (!newphoto) {
    return NextResponse.json(
      {
        error: 'Error creating the new user',
      },
      { status: 500 },
    );
  }

  // 7. return the new user to the client
  return NextResponse.json({ photo: newphoto });
}
