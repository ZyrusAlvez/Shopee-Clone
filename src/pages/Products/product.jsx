import { useParams } from "react-router-dom";

export default function Product() {
  const params = useParams()

  return (
    <div>
      <h1> Product no. {params.id}</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        optio in praesentium consectetur. Quibusdam adipisci quam necessitatibus
        exercitationem amet pariatur laudantium, fuga, at iste nam non nesciunt
        nihil sed soluta.
      </p>
    </div>
  );
}
