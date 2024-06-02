
import { PrismaClient } from "@prisma/client"
import {NextResponse} from "next/server"


export async function POST(req, res){
    try{
          let reqBody=await req.json()
          const prisma=new PrismaClient()
          let result=await prisma.seatPlan.create({
            data:reqBody
          })
          
        return NextResponse.json({status:"success", data:result})
    }
    catch(e){
         return NextResponse.json({status:'fail', data:e.toString()})
    }
}
export async function GET(req, res){
    try{
          const prisma=new PrismaClient()
          const result=await prisma.seatPlan.findMany({
         
          })
          return NextResponse.json({status:"success", data:result})
    }
    catch(e){
         return NextResponse.json({status:'fail', data:e.toString()})
    }
}
export async function PUT(req, res) {
    const prisma = new PrismaClient();
    try {
      let result = await prisma.seatPlan.aggregate({
        _sum: {
          OccupiedSeat: true,
          TotalSeat:true
        }
      }); 
      return NextResponse.json({ status: 'success', data: result });
    } catch (e) {
      
      return NextResponse.json({ status: 'fail', data: e.toString() });
    }
  }