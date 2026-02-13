const people = [
    {name: "أحمد سامي", desc: "شخص هادي لكنه دايمًا بيفكر بطريقة أعمق من اللي حواليه."},
    {name: "كريم فؤاد", desc: "بيحب المغامرة ودايمًا عنده خطط غير متوقعة."},
    {name: "يوسف عادل", desc: "اجتماعي جدًا وبيعرف يدخل أي مكان بثقة."},
    {name: "عمر خالد", desc: "غامض شوية وبيفضل يخلي أفكاره لنفسه."},
    {name: "مروان هشام", desc: "عنده روح قيادة وبيحب يكون دايمًا في المقدمة."},
    {name: "علي محمود", desc: "هادئ لكن وقت الجد بيبقى مختلف تمامًا."},
    {name: "سيف الدين", desc: "ذكي وسريع البديهة وبيعرف يحل المشاكل بسرعة."},
    {name: "محمد طارق", desc: "مرح وبيحب يضحك الناس حواليه دايمًا."},
    {name: "إياد كريم", desc: "بيشتغل في صمت ويفاجئ الكل بنتايجه."},
    {name: "زياد أشرف", desc: "شخص عنده طموح كبير ومش بيستسلم بسهولة."}
];

const container = document.getElementById("cardsContainer");
const searchInput = document.getElementById("search");

function displayCards(list) {
    container.innerHTML = "";
    list.forEach(person => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerText = person.name;

        card.onclick = () => openModal(person);

        container.appendChild(card);
    });
}

function openModal(person) {
    document.getElementById("modalName").innerText = person.name;
    document.getElementById("modalDesc").innerText = person.desc;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

searchInput.addEventListener("input", () => {
    const filtered = people.filter(p =>
        p.name.includes(searchInput.value)
    );
    displayCards(filtered);
});

displayCards(people);

