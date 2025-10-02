import React, { useState, useEffect } from 'react'

const CategoryFilter = () => {
  const [categories, setCategories] = useState([
    "Indoor",
    "Outdoor",
    "Succulent",
    "Flowering",
  ])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [plants, setPlants] = useState([])

  // Handle checkbox change
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  // Fetch data when categories change
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setPlants([]) // reset if nothing selected
      return
    }

    // Example: fetch data from backend
    fetch(`/api/plants?categories=${selectedCategories.join(",")}`)
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error(err))
  }, [selectedCategories])

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Category Checkbox */}
      <div className="mb-6 flex flex-wrap gap-4">
        {categories.map((category) => (
          <label key={category} className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <span className="text-gray-800">{category}</span>
          </label>
        ))}
      </div>

      {/* Plant List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {plants.length === 0 ? (
          <p className="text-gray-500 col-span-full">No plants found</p>
        ) : (
          plants.map((plant) => (
            <div
              key={plant.id}
              className="p-4 border rounded-lg shadow hover:shadow-md transition"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="h-40 w-full object-cover rounded-md mb-3"
              />
              <h3 className="font-semibold text-lg">{plant.name}</h3>
              <p className="text-sm text-gray-600">{plant.category}</p>
              <p className="text-indigo-600 font-bold">${plant.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default CategoryFilter
