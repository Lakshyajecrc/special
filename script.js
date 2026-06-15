const messages = [
  "              ONE MONTH With You 💞\nHey beautiful aaj sab kuch to nhi\npar kuch pal yad karte hai\nthe time we speant together.",
  "It all started in this beautiful day i texted you \nahh the night that made me yours,\nthe time that made you mine.",
  "ahh how can i forgot how we fight and reassure-\nthe little hand hold —\na bold move jisne mujhe shock chod diya.\n jisne mujhe tujhe i love bolne ke liye push kiya",
  "the you came back from lucknow  —\nthe day i was only there for you \nand the hug that made all those efforts worth it\n the hug from which we both never wanted to come out.",
  "first date that we can never forget —\nwe both dont know how we went from that to tight hugs \na day just  for us\n the day we both had our first kiss.",
  "The final meeting we had today ,\nahh kaise bhuloge vo  hug mera \npar usse bhi zyada yad hai mujhe tera jane se phele vo hug karna even after everything .",
  "The arcade day ,\nthe jealous satviki i see by my reel likes  \nbut i saw that sweet little smile i got there .",
  "ahh ab aise hazaaro moments yad nhi kar sakte,\nbut the time we had was the purest—\nahh aur understanding and support kabhi usse zyada na kar paya na mila.",
  "we can never forget the happy time we have spent till now ,\nsome intimate memories too \nbut the best part it was all out of love no lust.",
  "And when all the stars forget to shine,\nI’ll still find my light—\nin the warmth of your eyes."
];

// --- Elements for opening the envelope ---
const envelope = document.querySelector('.letter');
const flap = document.querySelector('.flap');
const container = document.getElementById('container');
const titleElement = document.querySelector('.title');

// --- Elements for message cycling ---
let current = 0;
const messageElement = document.getElementById("message");
const paper = document.getElementById("paper");
const nextBtn = document.getElementById("nextBtn");

function showMessage() {
  messageElement.textContent = messages[current];
  // Ensure long messages start from the top
  messageElement.scrollTop = 0;
}
// Load the first message so it's ready to be revealed
showMessage();

// --- Event listener to open the envelope (runs only once) ---
envelope.addEventListener('click', () => {
  flap.classList.add('open');
  container.classList.add('envelope-opened');
  titleElement.textContent = "Happy 2nd Anniversary, My Love ❤️";
  envelope.style.cursor = 'default'; // Remove pointer cursor after opening
}, { once: true });


// --- Event listener for the "Next Note" button ---
nextBtn.addEventListener("click", () => {
  // Prevent clicking while animation is in progress
  if (paper.classList.contains("out")) {
    return;
  }
  
  paper.classList.add("out");
  
  setTimeout(() => {
    current = (current + 1) % messages.length;
    showMessage();
    // Remove class to make the new paper slide back in
    paper.classList.remove("out");
  }, 750); // Synced with CSS transition duration

});
