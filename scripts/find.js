
var ingredients = [ ["Strawberries","Pineapple","Banana","Orange Juice","Greek Yogurt","Spinach","Chia","Ice"],
                    ["Cherries","Almond Milk","Protein Powder","Banana","Ice"],
                    ["Pineapple","Spinach","Grapes","Orange Juice","Banana","Ice"],
                    ["Coconut Milk","Chocolate Protein Powder","Blueberries","Spinach","Banana","Almond Butter","Ice"],
                    ["Kale","Baby Spinach","Pure Apple Juice","Cucumber","Lemon","Banana","Ginger","Ice"],
                    ["Peaches","Mango","Banana","Orange Juice","Turmeric","Ginger"]
]
 

Vue.component('smoothie-template', {
    props: ['smoothie', 'ingredients'],
    template: '<div><li class="smoothies">{{smoothie}}</li> <ul><li class="ingredients" v-for="item in ingredients">{{item}}, </li> </ul></div>'
})

var find = new Vue({
    el: '#find',
    data: {
        smoothies_name:[
            {id:0, name: "Babe Ruth Strawberry Pineapple Banana Smoothie", ingredients:ingredients[0]},
            {id:1, name: "Sweet Cherry Almond Smoothie", ingredients:ingredients[1]},
            {id:2, name: "Lovely Greens Smoothie", ingredients:ingredients[2]},
            {id:3, name: "Chocolate Powerhouse Smoothie", ingredients:ingredients[3]},
            {id:4, name: "Youthful Glow Green Smoothie", ingredients:ingredients[4]},
            {id:5, name: "Peachy Mango Smoothie", ingredients:ingredients[5]},
        ],
        all_ingredients:[
            { name:"Strawberries"},
            { name:"Pineapple"},
            { name:"Banana"},
            { name:"Orange Juice"},
            { name:"Greek Yogurt"},
            { name:"Spinach"},
            { name:"Chia"},
            { name: "Ice"},
            { name:"Cherries"},
            { name:"Almond Milk"},
            { name:"Protein Powder"},
            { name:"Grapes"},
            { name:"Coconut Milk"},
            { name:"Chocolate Protein Powder"},
            { name:"Blueberries"},
            { name:"Almond Butter"},
            { name:"Kale"},
            { name:"Baby Spinach"},
            { name:"Pure Apple Juice"},
            { name:"Cucumber"},
            { name:"Lemon"},
            { name:"Ginger"},
            { name:"Peaches"},
            { name:"Mango"},
            { name:"Turmeric"}
        ],
        checkedIngredients:[
        ],
        availableSmoothies:[
        ]
    },
    filters: {
        clean: function (value) {
          value = value.toString()
          return value
        }
      },
    methods: {
        findSmoothies: function () {
            if(document.getElementById("collapsible").classList.contains("active")){
                this.collapse();
                return;
            }
            this.availableSmoothies= [];
            for (var i=0; i<ingredients.length;i+=1){
                //console.log("------------------")
                //console.log("TRYING ITEM No."+i)
                var missing = []
                var possible = true;
                for (var z=0; z<ingredients[i].length;z+=1){
                    if (this.checkedIngredients.includes(ingredients[i][z])){
                        //console.log(ingredients[i][z]+" CHECK")
                    }else{
                        missing.push(ingredients[i][z])
                        possible = false;
                    }
                }if (possible){
                    this.availableSmoothies.push([this.smoothies_name[i].name,this.smoothies_name[i].ingredients])
                    //console.log("YOU CAN MAKE ITEM No."+i)
                }//else {
                    //console.log("YOU CAN'T MAKE ITEM No."+i+" MISSING ITEMS: "+missing)
                //}
            }
            //console.log(this.availableSmoothies);
            this.collapse();
        },
        collapse: function () {
            var coll = document.getElementById("collapsible");
            coll.classList.toggle("active");
            if (coll.classList.contains("active")){
                coll.textContent = "Hide"
                coll.after.content = "-"
            }else{
                coll.textContent = "Find Smoothies!"
            }
            var content = coll.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight +1000+ "px";
            }
        },
        search: function () {
            var input, filter, ul, li, a, i, txtValue;
            input = document.getElementById("ingSearch");
            filter = input.value.toUpperCase();
            checkboxes = document.getElementById("ingredient_checkboxes");
            ingredient = checkboxes.getElementsByTagName("div");
            for (i = 0; i < ingredient.length; i++) {
                label = ingredient[i].getElementsByTagName("LABEL")[0];
                txtValue = label.textContent || label.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    ingredient[i].style.display = "";
                } else {
                    ingredient[i].style.display = "none";
                }
            }
        }

    }
})

