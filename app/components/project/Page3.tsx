import styles from './project.module.css';

export default function Page3() {
  const superoffice = (
    <div className={styles.item}>
      <h1>Project Name</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        totam ipsum asperiores minus rerum cumque fugiat animi tempora eveniet.
        Ullam eveniet eius dolorum obcaecati dolores velit consequuntur quisquam
        modi quam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        totam ipsum asperiores minus rerum cumque fugiat animi tempora eveniet.
        Ullam eveniet eius dolorum obcaecati dolores velit consequuntur quisquam
        modi quam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        totam ipsum asperiores minus rerum cumque fugiat animi tempora eveniet.
        Ullam eveniet eius dolorum obcaecati dolores velit consequuntur quisquam
        modi quam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        totam ipsum asperiores minus rerum cumque fugiat animi tempora eveniet.
        Ullam eveniet eius dolorum obcaecati dolores velit consequuntur quisquam
        modi quam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        totam ipsum asperiores minus rerum cumque fugiat animi tempora eveniet.
        Ullam eveniet eius dolorum obcaecati dolores velit consequuntur quisquam
        modi quam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        totam ipsum asperiores minus rerum cumque fugiat animi tempora eveniet.
        Ullam eveniet eius dolorum obcaecati dolores velit consequuntur quisquam
        modi quam.
      </p>
    </div>
  );
  return (
    <div className={styles.page}>
      <div>
        <div className={styles.index}>
          <p>&nbsp;Project #3</p>
        </div>
        {superoffice}
      </div>
      <div>
        <div className={styles.index}></div>
      </div>
    </div>
  );
}
