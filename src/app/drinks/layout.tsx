const DrinksLayout = ({children}:{children:React.ReactNode}) => {
    return (
      <div className='max-w-xl'>
        <div className='mockup-code mb-8'>
          <pre data-prefix='$'>
            <code> <span>This is dummy text</span> </code>
          </pre>
        </div>
        {children}
      </div>
    );
  };
  export default DrinksLayout;