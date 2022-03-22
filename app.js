const app = new Vue({
    el: "#flashcards-app",
    data: {
        cards:[
            {
                question:"What year was IUPUI founded?",
                answer:"1969",
                category:"history",
                flipped:false
            },
            {
                question:"What is 2+2?",
                answer:"Fish",
                category:"math",
                flipped:false
            },
            {
                question:"Is mayonnaise an instrument?",
                answer:"No",
                category:"science",
                flipped:false
            }
        ],
        uquestion: "",
        uanswer: "",
        ucategory: ""
    },
    mounted() {
        if (localStorage.getItem("cards")) {
            try {
                this.cards = JSON.parse(localStorage.getItem("cards"));
            } catch (e) {
                localStorage.removeItem("cards");
            }
        }
    },
    methods: {
        addCard() {
            if (this.uquestion && this.uanswer && this.ucategory) {
                let card = {
                    question: this.uquestion,
                    answer: this.uanswer,
                    category: this.ucategory,
                    flipped: false
                };
                this.cards.push(card);
                this.uquestion = "";
                this.uanswer = "";
                this.ucategory = "";
                localStorage.setItem("cards", JSON.stringify(this.cards));
            }
        }
    }
});