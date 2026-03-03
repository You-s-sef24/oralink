import PublicRoute from "./Components/General/PublicRoute";
import Signin from "./Components/Signin";

export default function Home() {
  return (
    <PublicRoute>
      <Signin />
    </PublicRoute>
  );
}