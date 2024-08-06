import {
  useAlert,
  useHandleCalculateGas,
  withoutCommas,
} from "@gear-js/react-hooks";
import { Button } from "@gear-js/vara-ui";
import { useHamsterState, useStateMessage } from "@/app/hooks/use-read-state";
import { useProgramMetadata } from "@/app/hooks/api";

import { ADDRESS } from "@/consts";
import metaTxt from "@/assets/meta/hamster.meta.txt";
import styles from "./style.module.scss";

export const Count = () => {
  const alert = useAlert();
  const { state } = useHamsterState();
  const handleMessage = useStateMessage();
  const meta = useProgramMetadata(metaTxt);
  const calculateGas = useHandleCalculateGas(ADDRESS.CONTRACT, meta);

  const sendPing = () => {
    const payload = "Click";

    calculateGas(payload)
      .then((res) => res.toHuman())
      .then(({ min_limit }) => {
        const minLimit = withoutCommas(min_limit as string);
        const gasLimit = Math.floor(Number(minLimit) + Number(minLimit) * 0.2);

        handleMessage({ payload, gasLimit });
      })
      .catch((error) => {
        console.log(error);
        alert.error("Gas calculation error");
      });
  };

  return (
    <div className={styles.count}>
      <div className={styles.coin}></div>
      <br />
      <div className={styles.ninja} onClick={sendPing}>
        <Button text="Ping" />
      </div>
    </div>
  );
};
