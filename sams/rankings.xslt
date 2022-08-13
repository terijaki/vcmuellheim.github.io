<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output omit-xml-declaration="yes" method="html"/>
    <xsl:template match="/">
        <xsl:text>{% assign league_uuid = '</xsl:text><xsl:value-of select="rankings/matchSeries/uuid"/><xsl:text>' %}</xsl:text>
        <div class="col sams-rankings">
        <xsl:attribute name="liganame">
            <xsl:value-of select="rankings/matchSeries/name" />
        </xsl:attribute>
        <xsl:attribute name="ligaid">
            <xsl:value-of select="rankings/matchSeries/id" />
        </xsl:attribute>
            <div class="box">
                <h3 class="fw-bold"><xsl:value-of select="rankings/matchSeries/name"/></h3>
                <div class="footnote">
                    <div class="season">
                        Saison <xsl:value-of select="rankings/matchSeries/season/name"/>
                    </div>
                    <div class="timestamp">
                        Stand <xsl:value-of select="rankings/timestamp"/>
                    </div>
                </div>
                <div>
                    <table class="w-100">
                        <thead>
                            <tr>
                                <th>Platz</th>
                                <th>Mannschaft</th>
                                <th>Siege</th>
                                <th>Sätze</th>
                                <th>Punkte</th>
                            </tr>
                        </thead>
                        <tbody>
                    <xsl:for-each select="rankings/ranking">
                            <tr>
                                <xsl:attribute name="team">
                                    <xsl:value-of select="team/name" />
                                </xsl:attribute>
                                <td>
                                    <xsl:value-of select="place"/>
                                </td>
                                <td>
                                    <xsl:value-of select="team/name"/>
                                </td>
                                <td>
                                    <xsl:value-of select="wins"/>/<xsl:value-of select="matchesPlayed"/>
                                </td>
                                <td>
                                    <xsl:value-of select="setPoints"/>
                                </td>
                                <td>
                                    <xsl:value-of select="points"/>
                                </td>
                            </tr>
                </xsl:for-each>
                        <xsl:if test="not(ranking[0]/matchesPlayed > 0)">
                            <tr class="norankings">
                                <td colspan="4">Für diese Saison stehen derzeit keine Ergebnisse bereit.</td>
                            </tr>
                        </xsl:if>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>