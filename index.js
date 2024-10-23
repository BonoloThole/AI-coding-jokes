document.getElementById("poemButton").addEventListener("click", generatePoem);

async function generatePoem() {
  const poemDiv = document.getElementById("poem");
  const poemInput = document.getElementById("poemInput").value; 
  const apiKey = "76b110f3c34fcb40ft0eb8e332a5of0a"; 
  const prompt = poemInput ? poemInput : "Write me a poem about coding"; 

  try {
    const response = await fetch(
      `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
        prompt
      )}&context=poetry&key=${apiKey}`
    );
    const data = await response.json();

    if (data.answer) {
      poemDiv.innerText = data.answer;
    } else {
      poemDiv.innerText = "Sorry, no poem could be generated.";
    }
  } catch (error) {
    poemDiv.innerText = "Oops! Could not fetch a poem at the moment.";
    console.error("Error fetching poem:", error);
  }
}
