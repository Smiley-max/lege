document.getElementById("legeaftaleForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Forhindrer standard formularindsendelse

    const name = document.getElementById("name").value;
    const playmate = document.getElementById("playmate").value;

    // Discord Webhook URL (indsæt din egen her)
    const webhookURL = "PRIVAT!";

    // Payload, der sendes til Discord
    const data = {
        content: `${name} har lavet en legeaftale med ${playmate}! 🎉`
    };

    // Send POST-anmodning til Discord webhook
    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Succes:", data);
        alert("Legeaftalen er sendt!");
    })
    .catch((error) => {
        console.error("Fejl:", error);
        alert("Noget gik galt. Prøv igen.");
    });
});


