import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data, status } = useSession();

  const loginHandler = () => {
    signIn("github");
  };

  const logoutHandler = () => {
    signOut();
  };
  return (
    <div style={{ marginLeft: "100px" }}>
      <h1>Next Auth | GitHub Login</h1>
      {/* automatic signup */}
      {status == "authenticated" ? (
        <>
          <button onClick={logoutHandler}>Logout</button>
          <Link href="/dashboard">
            <button>Dashboard</button>
          </Link>
          <Link href="/ssrdashboard">
            <button>SSR Dashboard</button>
          </Link>
        </>
      ) : 

      <button onClick={loginHandler}>Login</button>
      }
    </div>
  );
}
