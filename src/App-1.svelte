<script>
  import { db } from "./firebase";

  let data;

  let pageSize = 2;
  let query;
  let firstDoc;
  let lastDoc;

  $: console.log(data);

  const onFirstData = () => {
    db.collection("cities")
      .orderBy("number")
      .limit(pageSize)
      .get()
      .then((snapshot) => {
        firstDoc = snapshot.docs[0];
        lastDoc = snapshot.docs[snapshot.docs.length - 1];
        data = snapshot.docs.map((doc) => doc.data());
      });
  };

  const onNextData = () => {
    db.collection("cities")
      .orderBy("number")
      .limit(pageSize)
      .startAfter(lastDoc)
      .get()
      .then((snapshot) => {
        firstDoc = snapshot.docs[0];
        lastDoc = snapshot.docs[snapshot.docs.length - 1];
        data = snapshot.docs.map((doc) => doc.data());
      });
  };

  const onPrevData = () => {
    db.collection("cities")
      .orderBy("number")
      .limitToLast(pageSize)
      .endBefore(firstDoc)
      .get()
      .then((snapshot) => {
        firstDoc = snapshot.docs[0];
        lastDoc = snapshot.docs[snapshot.docs.length - 1];
        data = snapshot.docs.map((doc) => doc.data());
      });
  };
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello World!</h1>
  Visit the
  <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
  to learn how to build Svelte apps.
  <div class="">
    <button on:click={onFirstData}>Load Data</button>
    <button on:click={onNextData}>Next Page</button>
    <button on:click={onPrevData}>Prev Page</button>
  </div>
</main>
