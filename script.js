document.getElementById("legeaftaleForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Forhindrer standard formularindsendelse

    const name = document.getElementById("name").value;
    const playmate = document.getElementById("playmate").value;

    // Discord Webhook URL (indsæt din egen her)
    const webhookURL = "https://discord.com/api/webhooks/1351134584082927637/mmp9Fz2lO-5oFQDlZR3ycYi7Q40CRiDx-jJNoxfc1aBJcjVZ0qEB11aZrPIaAYT2swB9";

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


