import { Card } from '@components/commons';

const PhotoItem = () => {
  return (
    <Card className={`w-auto h-auto p-1 bg-info`}>
      <img
        src="https://placekitten.com/250"
        alt=""
        className={`rounded w-100`}
      />
    </Card>
  );
}

export default PhotoItem;