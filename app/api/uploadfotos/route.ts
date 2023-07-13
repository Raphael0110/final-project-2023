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
  imageData: z.string(),
  userid: z.string(),
});

export async function POST(
  request: NextRequest,
): Promise<NextResponse<RegisterResponseBodyPost>> {
  const body = await request.json();

  console.log('body', body);
  console.log(typeof body.userid);

  // 1. get the credentials from the body
  const result = photoSchema.safeParse(body);

  // 2. verify the user data and check that the name is not taken
  if (!result.success) {
    // zod send you details about the error
    // console.log(result.error);
    return NextResponse.json(
      {
        error: 'username or password missing',
      },
      { status: 400 },
    );
  }

  // 4. store the credentials in the db
  const newphoto = await createfotos(result.data.imageData, result.data.userid);

  if (!newphoto) {
    // zod send you details about the error
    // console.log(result.error);
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
