import { PrismaClient } from "@prisma/client";

let prisma:PrismaClient;

if(process.env.NODE_ENV === 'production'){
    prisma = new PrismaClient();
}
else {
    let globalWithPrimas = global as typeof globalThis &  {
        prisma:PrismaClient;
    }

    if(!globalWithPrimas.prisma){
        globalWithPrimas.prisma = new PrismaClient();
    }

    prisma = globalWithPrimas.prisma;
}

export default prisma;