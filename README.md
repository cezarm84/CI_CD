# CI_CD
Ci Cd uppgift

https://cezarm84.github.io/CI_CD/

figma sketch:
https://www.figma.com/board/3jsfNz1ghUqFM5NSaev7OD/CI_CD-workflow?t=wmeE1vc3tdVK9TGX-6

Reflektion över CI/CD Implementation:
Vad jag lärt mig om CI/CD?

nu förstår jag att ci/cd som  en strategi för att förbättra hela utvecklingsflödet.
Det handlar om:

Continuous Integration (CI): Att kontinuerligt testa koden för att hitta problem tidigt.
Continuous Delivery (CD): Att säkerställa pålitliga och automatiserade deploymentprocesser.

I min lösning implementerade jag dem principer genom att:

Använda automatiserade tester för både frontend och backend.
Skapa en pipeline som säkerställer kvalitet innan deployment.

Fördelar:
Enkel integration: GitHub Actions är väl integrerat med GitHub, vilket gör att pipelines kan triggas direkt vid varje commit.
Flexibilitet: Konfigurationen görs enkelt i YAML-format, och arbetsflöden kan återanvändas vilket sparar tid.
Brett ekosystem: Det finns många färdiga actions som gör det möjligt att snabbt och enkelt integrera med andra verktyg och tjänster.

Begränsningar:
Begränsade resurser: På gratisversionen finns det ett tak för antalet parallella jobb, vilket kan leda till längre väntetider.
Komplex cachehantering: För att hantera beroenden effektivt krävs manuellt arbete med caching, vilket inte alltid är optimalt.

förbättringar:
Bättre deployment-flöden: Det skulle vara användbart att ha inbyggt stöd för godkännandeflöden vid deployment.
innebär att när du deployar (publicerar) en ny version av din kod till en produktionsmiljö, skulle det vara bra att ha ett godkännande innan det sker.
Detta kan vara användbart för att säkerställa att någon t.ex. en teamledare eller utvecklare kan manuellt godkänner att deploymenten kan genomföras.

Förbättrad visualisering: Det skulle underlätta om GitHub Actions erbjöd en mer detaljerad och lättförståelig visualisering av beroenden mellan olika steg i pipeline.

Jag säkerställde bra testtäckning genom att:

Göra enhetstester för backend-logik och API-integrationstester.
Använda komponenttester och API-testning för frontend.
Säkerställa kodkvalitet med linting, kodstilskontroller och säkerhetsskanningar.
Denna strategi gör att vi tidigt hittar och åtgärdar problem, vilket ger oss en stabil och pålitlig utvecklings- och deploymentprocess.
