import styles from "./PageContainer.module.css";

type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.page}>{children}</div>
    </div>
  );
}
