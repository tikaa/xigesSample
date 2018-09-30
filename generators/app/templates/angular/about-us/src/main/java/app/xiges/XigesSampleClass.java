package <%=packageName%>.app.xiges.sample.<%=componentDirName%>;

/**
 * Enum for the different audit actions
 */
public enum <%=userInputClassName%> {
    CREATE("CREATE"),
    UPDATE("UPDATE"),
    DELETE("DELETE");

    private String <%=userVarName%>;

    EntityAuditAction(final String value) {
        this.value = value;
    }

    public String value() {
        return value;
    }

    @Override
    public String toString() {
        return this.value();
    }
}
