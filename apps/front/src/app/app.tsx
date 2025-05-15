import { CardSample } from 'components';

export function App() {
  return (
    <div className="m-4">
      <h1 className="text-xl font-bold my-6">Sample Home Page</h1>
      <h2 className="my-4 font-bold">This next component in the app code</h2>
      <div className="avatar avatar-placeholder">
        <div className="bg-neutral text-neutral-content w-24 rounded-full">
          <span className="text-3xl">D</span>
        </div>
      </div>
      <div className="avatar avatar-online avatar-placeholder">
        <div className="bg-neutral text-neutral-content w-16 rounded-full">
          <span className="text-xl">AI</span>
        </div>
      </div>
      <div className="avatar avatar-placeholder">
        <div className="bg-neutral text-neutral-content w-12 rounded-full">
          <span>SY</span>
        </div>
      </div>
      <div className="avatar avatar-placeholder">
        <div className="bg-neutral text-neutral-content w-8 rounded-full">
          <span className="text-xs">UI</span>
        </div>
      </div>
      <h2 className="my-4 mt-8 font-bold">
        Next component loaded from a library of components
      </h2>
      <p>Required using @source directive in the css file.</p>
      <CardSample />
    </div>
  );
}

export default App;
