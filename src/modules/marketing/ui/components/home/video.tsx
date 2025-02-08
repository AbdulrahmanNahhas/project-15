import HeroVideoDialog from "@/components/video-dialog";

export function Video() {
  return (
    <div className="relative container mx-auto px-4">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://wallpapers.com/images/featured/education-d4w62mny8rdusxe0.jpg"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://wallpapers.com/images/featured/education-d4w62mny8rdusxe0.jpg"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
