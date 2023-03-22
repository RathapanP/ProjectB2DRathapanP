let items = [];

function addItem() {
    const itemnamewho = document.getElementById("itemnamewho").value;
    const itemname = document.getElementById("itemname").value;
    const itemprice = document.getElementById("itemprice").value;

    if (itemnamewho && itemname && itemprice) {
        items.push({
            who: itemnamewho,
            name: itemname,
            price: Number(itemprice)
        });

        document.getElementById("itemlist").innerHTML = "";
        let total = 0;

        for (const item of items) {
            const li = document.createElement("li");
            li.textContent = `${item.who}: ${item.name}: ${item.price.toFixed(2)}`;
            document.getElementById("itemlist").appendChild(li);
            total += item.price;
        }

        document.getElementById("itemnamewho").value = "";
        document.getElementById("itemname").value = "";
        document.getElementById("itemprice").value = "";
        document.getElementById("total").value = total.toFixed(2);
    }
}

function calculate() {
    const members = document.getElementById("members").value;

    if (members && members > 0 && items.length > 0) {
        const total = Number(document.getElementById("total").value);
        const pricePerMember = total / members;
        document.getElementById("pricepermember").value = pricePerMember.toFixed(2);
    }
}