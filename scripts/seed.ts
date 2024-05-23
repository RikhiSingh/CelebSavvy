const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main(){
    try{
        await db.category.createMany({
            data:[
                {name:"Famous People"},
                {name:"Movies & TV"},
                {name:"Musicians"},
                {name:"Games"},
                {name:"Sports"},
                {name:"Animals"},
                {name:"Scientists"},
                {name:"Tech"},
                {name:"Philosophy"},
                {name:"Other"},
            ]
        })
    }catch(error){
        console.error("Error seeding default categories", error);
    }finally{
        await db.$disconnect();
    }
};

main();