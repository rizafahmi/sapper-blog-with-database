<style>
  input {
    height: 2em;
    width: 80%;
    padding: 0.5em;
    margin: 0.5em;
    border: 1px solid rgba(255,62,0,0.25)
  }
  textarea {
    padding: 0.5em;
    margin: 0.5em;
    width: 80%;
    border: 1px solid rgba(255,62,0,0.25);
  }
  button {
    padding: 1.5em;
    margin: 0.5em;
    width: 82%;
    background-color: rgb(255,62,0);
    color: #fff;
    appearance: none;
    -webkit-appearance: none;
    border: none;
    font-weight: 600;
    font-size: 16px;
  }
</style>

<h1>New Post</h1>
<form action="/blog/save">
  <input type="text" name="title" placeholder="title for your post">
  <input type="text" name="slug" placeholder="url friendly slug">
  <textarea id="" name="html" rows="10" ></textarea>
  <button type="submit">💾 Save</button>
</form>
