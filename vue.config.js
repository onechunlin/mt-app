//mock数据
const express = require("express")
const app = express()

var goods = require("./data/goods.json")
var ratings = require("./data/ratings.json")
var seller = require("./data/seller.json")

module.exports = {
    configureWebpack: {
        resolve: {
          alias: {
            'vue$':'vue/dist/vue.esm.js' 
          }
        }
    },
    devServer: {
        before(app){
            app.get("/api/goods",(req,res) =>{
                res.json(goods)
            })
    
            app.get("/api/ratings",(req,res) =>{
                res.json(ratings)
            })
    
            app.get("/api/seller",(req,res) =>{
                res.json(seller)
            })
          }
    }
  }
  