import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req,res){
    try{
        let reqBody=await req.json()
        let prisma=new PrismaClient()
        let result=await prisma.noticLIst.create({
            data:reqBody
        })
        return NextResponse.json({status:'success', data:result})
    }
    catch{
        return NextResponse.json({status:'fail', data:e.toString()})
    }
}
export async function GET(req, res){
    try{
          
          const prisma=new PrismaClient()
          const result=await prisma.noticLIst.findMany({
         
          })
        
        return NextResponse.json({status:"success", data:result})
    }
    catch(e){
         return NextResponse.json({status:'fail', data:e.toString()})
    }
}