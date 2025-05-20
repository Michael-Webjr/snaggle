// slogans.ts
// For now, let's use a simple array while we debug the file loading issue
const slogans = [
  "Snag what you need, share what you don't.",
  "Because Costco doesn't do single packs.",
  "Your roommate marketplace for everything.",
  "Share the bulk, split the cost.",
  "From bulk buying to shared living.",
  "One person's excess is another's necessity.",
  "Making roommate commerce simple.",
  "Skip the whole pack, get what you need.",
  "Share groceries, share savings.",
  "Bulk buys made for apartment living.",
  "Turn your place into a mini marketplace.",
  "No more wasted bulk purchases.",
  "Split costs, share benefits.",
  "Your personal convenience store at home.",
  "Because who needs 24 rolls of toilet paper?",
  "Share smarter, save together.",
  "Transform clutter into community cash.",
  "The social economy for shared spaces.",
  "Making every home a sharing economy.",
  "Where extras become essentials for others."
];

export const getRandomSlogan = (): string => {
  return slogans[Math.floor(Math.random() * slogans.length)];
};