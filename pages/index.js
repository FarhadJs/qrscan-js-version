import styles from "../styles/Home.module.css";
import FormEth from "./components/FormEth";
import Transactions from "./components/Transactions";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className="min-h-[100vh] flex items-center justify-start gap-8 flex-col p-3 pt-10">
        <div className="flex items-center justify-center gap-1">
          <h1 className="text-2xl">Ethereum</h1>
          <span className="bg-[#1C212C] bg-opacity-80 px-2 mt-0.5 rounded-xl text-white text-opacity-50">
            ETH
          </span>
        </div>
        <FormEth />
        <Transactions />
      </main>
    </div>
  );
}
