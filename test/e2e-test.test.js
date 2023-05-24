const chai=require("chai");
const chaiHttp=require("chai-http");
const expect=require("chai").expect;
chai.use(chaiHttp);
const app=require("../index.js").app;


const url="hhtp://localhost:3000";

describe("2. Post para insertar nombre y precio",()=>{
    it ("esperamos un name y un price",(done)=>{
        chai.request(url)
        .post("api/v1/products")
        .send({name:"teclado", price: 200})
        .end ((error,res)=>{
            //console.log(res.text)
            expect(res).to.have.status(200)
            done()
        })
    })
    
})



