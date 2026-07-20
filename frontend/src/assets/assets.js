{/*images of menu that we are going to use*/}
import cheesburger from "../assets/cheesburger.png"
import chocolate_cake from "../assets/chocolate_cake.png"
import eggs from "../assets/eggs.png"
import japaneese_raman from "../assets/japaneese_raman.png"
import rice from "../assets/rice.png"
import smoothie from "../assets/smoothie.png"
import tacos from "../assets/tacos.png"
import pizza from "../assets/pizza.png"
import bamboo_steamer from "../assets/bamboo_steamer.png"
import belgian_waffles from "../assets/belgian_waffles.png"
import food_1 from "../assets/smoothie.png"
import food_2 from "../assets/cheesburger.png"
import parcel from "../assets/parcel.png"


 {/*organized the menu and food list names properly*/}
export const menu_list=[
    {
        menu_name:"cheesburger",
        menu_image:cheesburger
    },
    
    {
        menu_name:"cake",
        menu_image:chocolate_cake
    },
    {
        menu_name:"eggs",
        menu_image:eggs
    },
    {
        menu_name:"japanees_raman",
        menu_image:japaneese_raman
    },
    {
        menu_name:"rice",
        menu_image:rice
    },
    {
        menu_name:"smoothie",
        menu_image:smoothie
    },
    {
        menu_name:"tacos",
        menu_image:tacos
    },
    {
        menu_name:"pizza",
        menu_image:pizza
    },
    {
        menu_name:"bamboo steamer",
        menu_image:bamboo_steamer
    },
    {
        menu_name:"belgian waffles",
        menu_image:belgian_waffles
    },
]
export const food_list=[
    {
        _id:"1",
        name:"Greek Salad",
        image:food_1,
        price:12,
        description:"food provides essential nutrients for overall health and well being",
        category:"smoothie"
    },
    {
        _id:"2",
        name:"Cheese Burger",
        image:food_2,
        price:12,
        description:"food provides essential nutrients for overall health and well being",
        category:"cheesburger"
    },

]
// images
// import cheesburger from "./cheesburger.png";
// import chocolate_cake from "./chocolate_cake.png";
// import eggs from "./eggs.png";
// import japaneese_raman from "./japaneese_raman.png";
// import rice from "./rice.png";
// import smoothie from "./smoothie.png";
// import tacos from "./tacos.png";
// import pizza from "./pizza.png";
// import bamboo_steamer from "./bamboo_steamer.png";
// import belgian_waffles from "./belgian_waffles.png";

// // single export object
// export const assets = {
//   images: {
//     cheesburger,
//     chocolate_cake,
//     eggs,
//     japaneese_raman,
//     rice,
//     smoothie,
//     tacos,
//     pizza,
//     bamboo_steamer,
//     belgian_waffles,
//   },

//   menu_list: [
//     { menu_name: "cheesburger", menu_image: cheesburger },
//     { menu_name: "chocolate_cake", menu_image: chocolate_cake },
//     { menu_name: "eggs", menu_image: eggs },
//     { menu_name: "japaneese_raman", menu_image: japaneese_raman },
//     { menu_name: "rice", menu_image: rice },
//     { menu_name: "smoothie", menu_image: smoothie },
//     { menu_name: "tacos", menu_image: tacos },
//     { menu_name: "pizza", menu_image: pizza },
//     { menu_name: "bamboo_steamer", menu_image: bamboo_steamer },
//     { menu_name: "belgian_waffles", menu_image: belgian_waffles },
//   ],

//   food_list: [
//     {
//       _id: "1",
//       name: "Greek Salad",
//       image: smoothie,
//       price: 12,
//       description:
//         "Food provides essential nutrients for overall health and well-being",
//       category: "Salad",
//     },
//   ],
// };
