<script>
export default {
  name: 'About',
  render() {
    return (
      <div>
        <h1>
          {this.languageContent.about}
        </h1>
        <div>
          <button onClick={this.handleChange}>change language</button>
        </div>
      </div>
    )
  }
}
</script>