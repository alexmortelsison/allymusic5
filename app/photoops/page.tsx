import DownloadImage from "../components/DownloadImage";

export default function PhotoOpsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="px-14 lg:px-0 md:text-4xl text-2xl text-center">
        Relive The Experience.
      </h1>
      <p className="text-center pt-2 text-sm md:text-md">
        Download your image.
      </p>
      <div className="pt-8 max-w-7xl mx-auto flex justify-center">
        <DownloadImage />
      </div>
    </div>
  );
}
