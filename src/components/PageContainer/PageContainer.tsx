import styles from "./PageContainer.module.css";

type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className={styles.container}>
      <div>{children}</div>
    </div>
  );
}
