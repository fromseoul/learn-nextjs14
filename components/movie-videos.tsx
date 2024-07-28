import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css";


async function getVideo(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return await response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideo(id);
  return (
    <div  className={styles.container}>
      {videos.map((video: { key: string, name: string }) => {
        return (
          <iframe src={`https://www.youtube.com/embed/${video.key}`} title={video.name} allowFullScreen></iframe>);
        })}
    </div>
  );
}