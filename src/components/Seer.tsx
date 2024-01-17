/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uUOFXdrtlTN
 */
export function Seer(data) {
  return (
    <div className="h-screen w-full overflow-auto snap snap-y snap-mandatory">
      <div className="snap-start h-screen flex items-center justify-center bg-red-200">
        <div className="text-4xl font-bold">Section 1</div>
      </div>
      <div className="snap-start h-screen flex items-center justify-center bg-green-200">
        <div className="text-4xl font-bold">Section 2</div>
      </div>
      <div className="snap-start h-screen flex items-center justify-center bg-blue-200">
        <div className="text-4xl font-bold">Section 3</div>
      </div>
      <div className="snap-start h-screen flex items-center justify-center bg-yellow-200">
        <div className="text-4xl font-bold">Section 4</div>
      </div>
    </div>
  )
}
export default Seer