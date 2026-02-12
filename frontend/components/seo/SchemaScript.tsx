/**
 * Component for rendering JSON-LD schema markup
 * Usage: <SchemaScript schema={schemaObject} />
 */

interface SchemaScriptProps {
    schema: object | object[]
}

export default function SchemaScript({ schema }: SchemaScriptProps) {
    const schemas = Array.isArray(schema) ? schema : [schema]

    return (
        <>
            {schemas.map((schemaObj, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaObj, null, 0),
                    }}
                />
            ))}
        </>
    )
}
