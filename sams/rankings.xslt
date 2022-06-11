<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <div class="col sams-rankings">
            <div class="box">
                <h1><xsl:value-of select="rankings/matchSeries/name"/></h1>
                <div class="sams-tabelle">
                    <table>
                        <thead>
                            <tr>
                                <th>Platz</th>
                                <th>Mannschaft</th>
                                <th>Siege</th>
                                <th>Sätze</th>
                                <th>Punkte</th>
                            </tr>
                        </thead>
                    <xsl:for-each select="rankings/ranking">
                        <tbody>
                            <tr>
                                <td>
                                    <xsl:value-of select="place"/>
                                </td>
                                <td>
                                    <xsl:value-of select="team/name"/>
                                </td>
                                <td>
                                    <xsl:value-of select="wins"/>
                                </td>
                                <td>
                                    <xsl:value-of select="setPoints"/>
                                </td>
                                <td>
                                    <xsl:value-of select="setPointDifference"/>
                                </td>
                            </tr>
                        </tbody>
                </xsl:for-each>
                    </table>
                </div>
                <div class="timestamp">
                    Stand <xsl:value-of select="rankings/timestamp"/>
                </div>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>