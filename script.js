
const rosters = [
  {
    start: "Sunday, 04 of May 2025",
    end: "Saturday, 10 of May 2025",
    shifts: 5,
    hours: "20h"
  },
  {
    start: "Sunday, 27 of Apr 2025",
    end: "Saturday, 03 of May 2025",
    shifts: 5,
    hours: "19.5h"
  }
];

const container = document.getElementById("rosters");

rosters.forEach((item) => {
  const card = document.createElement("div");
  card.className = "bg-gray-900 border-r-4 border-green-500 text-white p-4 rounded flex flex-col items-start";
  card.innerHTML = `
    <p>${item.start}</p>
    <p>${item.end}</p>
    <div class="flex items-center text-sm text-gray-400 space-x-4 mt-2">
      <span class="flex items-center">
        <svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 7V3m8 4V3m-9 9h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        ${item.shifts} shifts
      </span>
      <span class="flex items-center">
        <svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        ${item.hours}
      </span>
    </div>
  `;
  container.appendChild(card);
});
