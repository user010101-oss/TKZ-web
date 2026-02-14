const people = [
    {name: "كريم بشله", desc: "بيفضل يعاكس البنات وبيتخانق معاهم وعدم الرجوله وصله انه بيمد ايده علي البنات وبيضربهم ومره قدام المدرسه ضرب بنت وطلع يجري يعني حرفيا مش راجل بمعني الكلمه وكمان بيطلع سمعه وحشه علي بنات كتير"},
    {name: "ادم شوكالاته", desc: "حواراته كتير وكان عامل مشاكل الترم الاول وبيطلع سمعه علي بنتين انهم كانو بيبعتولو صور وكدا وهما اصلا محترمين جدا خلي الناس تكرههم وبرضو بيتكلم علي بنات كتير وبيهين شرفهم"},
    {name: "ادم وائل", desc: "حواراته كتير وليه علاقه ببنات كتير وممكن يخسر اي ولد عشان البنات وكان مرتبط ببنت ف تالته اعدادي وصاحب واحده تانيه ف تانيه اعدادي وحصل مشكله وبعدها قال انهم سابو بعض وكانو بيكدبو"},
    {name: "محمد رسلان", desc: "عيل مش راجل وحواراته ومشاكله كتيره وبيعرض للبنات وممكن يخسر او يخلي شكل حد صاحبه وحش مجرد انه يلفت انتباه بنت وبيسرق فلوس من اهله ويروح يجيب بيها فيبات وسجاير والرجوله عنده تحت الصفر"},
    {name: "محمود مبروك", desc: "كان مرتبط بواحده وراح خانها مع واحده ف تالته اعدادي وكان بيقول انهم صاحب بس وفي الاخر خسر صاحبه وخسر اللي كان مرتبط بيها في الاول عشان اللي خانها معاها وفي الاخر سابتو اصلا ودلوقت مرتبط بواحده وهي خسرت صحابها عشان ترتبط بيه بس هو مبيحبهاش وبيكلم عليها كتير وبيخونها "},
    {name: "انس محمد", desc: "ممكن يخلي شكل اي واحد وحش ويغلط فيه قدام البنات عشان يتروشن عليه ويطلعه مسرح عشان يبان حلو دا غير انه راح ارتبط ب اكس صاحبه وبيتكلم عليه ف ضهره"},
    {name: "معاذ مسعد", desc: "بيحب يتروشن ويبان حلو قدام البنات وراح كلم واحده وهو عارف ان واحد محمد وائل كان بيحبها بس مفرقش معاه غير نفسه"},
    {name: "خالد مسله", desc: "راح كلم واحده وخرج معاها رغم انه عارف انها كانت مرتبطه بمحمود"},
    {name: "مازن وائل", desc: "عيل مش راجل غير انه بيرتبط ببنات كتير وبيخونهم وكمان بيمسك صور علي بنات حاجه مقرفه اوي يعني"},
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

