<script>
export default {
  name: 'Home',
  render() {
    return (
      <div class="home">
        <h1>{this.languageContent.home}</h1>
        <div>
          <button onClick={this.handleChange}>change language</button>
        </div>
      </div>
    )
  }
}
</script>
