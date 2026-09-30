import image from "@/assets/Events/Carousel/event.png";
import largeImage from "@/assets/Events/Carousel/eventLarge.webp";
export const categories = ["music", "quizzes", "drama", "dance", "photography", "misc"] as const;
// The upstream repository contains category artwork but no historical API dataset.
// These deliberately labelled fixtures demonstrate the original event-card layouts.
export const demoEvents = categories.map((category, index) => ({
  id: index + 1, name: `${category[0].toUpperCase() + category.slice(1)} showcase · demo`,
  categories: [category], club: "Portfolio demonstration", organizer: "Portfolio demonstration",
  venue_name: "Demonstration venue", contact: "Historical event details unavailable",
  about: "Demo content for this restored portfolio. This sample illustrates the original event interface; it is not a historical event listing or an active registration.",
  img: image, largeImg: largeImage, img_url: largeImage.src,
}));
export const demoColleges = [{ value: 1, label: "Demo college · fictional" }, { value: 2, label: "Sample institute · fictional" }];
export const demoSponsors = [{ id: 1, name: "Sponsor showcase · demo", description: "Historical sponsor records were supplied by the retired backend. This card demonstrates the original design.", order: 1, url: "/oglogo.png", web_url: "/sponsors/", icon: "/oglogo.png", link: "/media-partners/", publication: false }, { id: 2, name: "Publication showcase · demo", description: "Fictional portfolio sample, not an event endorsement.", order: 2, url: "/oglogo.png", web_url: "/sponsors/", icon: "/oglogo.png", link: "/media-partners/", publication: true }];
