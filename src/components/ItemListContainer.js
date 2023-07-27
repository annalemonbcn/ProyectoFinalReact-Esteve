function ItemListContainer({ greeting }) {
  return (
    <div className="flex justify-center mt-10">
      <h1 className="text-2xl">
        Saludos, {greeting}!
      </h1>
    </div>
  )
}

export default ItemListContainer
