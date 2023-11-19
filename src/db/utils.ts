"use server";

import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { prisma } from "@/db/prisma";

export const getSession = async () => {
  return await getServerSession(nextAuthOptions);
};
