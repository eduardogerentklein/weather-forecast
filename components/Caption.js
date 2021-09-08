const Caption = ({ children, className }) => (
  <>
    <p className={`font-roboto font-normal text-2xl ${className}`}>
      {children}
    </p>
    <style jsx>
      {`
        .caption-description:first-letter {
          text-transform: capitalize;
        }
      `}
    </style>
  </>
)

export default Caption
