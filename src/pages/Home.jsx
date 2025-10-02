import { useLoaderData } from 'react-router'
import PlantCard from '../Components/PlantCard'
import React, { useState, useEffect } from "react"
import axios from "axios"
import LoadingSpinner from '../Components/LoadingSpinner'
import leaf1 from '../assets/hero-leaf1.png'
import leaf2 from '../assets/hero-leaf2.png'

const Home = () => {
  const [categories, setCategories] = useState([])
  const [plantss, setPlantss] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loading, setLoading] = useState(false) // ✅ Loading state

  // Fetch categories
  useEffect(() => {
    setLoading(true)
    axios
      .get("https://openapi.programming-hero.com/api/categories")
      .then((res) => {
        setCategories(res.data.categories || [])
        setSelectedCategory('All')
      })
      .catch((err) => console.error("Error fetching categories:", err))
      .finally(() => setLoading(false))
  }, [])

  // Fetch plants
  useEffect(() => {
    if (!selectedCategory) return

    setLoading(true) // ✅ Start spinner

    const url =
      selectedCategory === 'All'
        ? "https://openapi.programming-hero.com/api/plants"
        : `https://openapi.programming-hero.com/api/category/${selectedCategory}`

    axios
      .get(url)
      .then((res) => {
        setPlantss(res.data.plants || [])
      })
      .catch((err) => console.error("Error fetching plants:", err))
      .finally(() => setLoading(false)) // ✅ Stop spinner
  }, [selectedCategory])

  return (
    <div>
       <section className="relative w-full h-[300px]  md:h-[400px] bg-[#CFF0DC] overflow-hidden mt-5 rounded-2xl">

            <div className="absolute bottom-0 left-0 w-[30%]  h-auto">
                <img src={leaf1} alt="Left Leaf" className="w-full h-auto object-contain"/>
            </div>


            <div className="absolute bottom-0 right-0 w-[30%]  h-auto">
                <img src={leaf2} alt="Right Leaf" className="w-full h-auto object-contain"/>
            </div>


            <div className="relative z-50 flex flex-col justify-center items-center h-full px-5 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 ">Plant a Tree, Grow a Future</h2>
                <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl text-[#1F2937]">
                    Join our mission to plant 1 million trees and make the Earth greener for future
                    generations.
                </p>
                <button
                    className="w-max mx-4 cursor-pointer bg-[#FACC15] rounded-3xl my-5 text-green-600 px-6 py-2 text-lg  font-medium">Get
                    Involved</button>


            </div>
        </section>
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 mb-6 mt-5 justify-center items-center">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-4 py-2 rounded-lg border transition ${
            selectedCategory === "All"
              ? "bg-green-600 text-white border-green-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          All Plants
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-lg border transition ${
              selectedCategory === category.id
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {category.category_name}
          </button>
        ))}
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <LoadingSpinner/>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-8 px-12'>
          {plantss.map((plant) => (
            <PlantCard key={plant?.id} plant={plant} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
