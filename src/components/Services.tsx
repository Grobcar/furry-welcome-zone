const ServiceCard = React.memo(({ service }) => (
  <Collapsible key={service.title}>
    <Card className="hover:shadow-lg transition-shadow flex flex-col">
      <CollapsibleTrigger asChild>
        <button className="text-left w-full group">
          <CardHeader className="flex items-center justify-between">
            {/* Ícono grande y texto centrado verticalmente */}
            <div className="flex items-center space-x-4 w-full">
              <service.icon className="h-16 w-16 text-primary" />
              <div className="flex flex-col flex-1 items-center">
                <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
                <p className="text-gray-600 text-sm text-center">{service.description}</p>
              </div>
              {/* Flecha en la esquina derecha */}
              <ChevronDown
                className="h-8 w-8 text-gray-500 transition-transform duration-300 
                           group-[state=open]:rotate-180"
              />
            </div>
          </CardHeader>
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <CardContent className="border-t">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {service.details.map((detail, idx) => (
              <li key={idx} className="text-sm">{detail}</li>
            ))}
          </ul>
        </CardContent>
      </CollapsibleContent>
    </Card>
  </Collapsible>
));

export default ServiceCard;
