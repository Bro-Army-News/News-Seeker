import java.util.Date;

public class UnregisteredUser extends User{
    private String userName;
    private Date userDOB;
    private String userCountry;
    private String userEmail;
    private String preferredNewsCategory[];

    public UnregisteredUser(String userId, String password, String userName, Date userDOB, String userCountry, String userEmail, String[] preferredNewsCategory) {
        super(userId, password);
        this.userName = userName;
        this.userDOB = userDOB;
        this.userCountry = userCountry;
        this.userEmail = userEmail;
        this.preferredNewsCategory = preferredNewsCategory;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Date getUserDOB() {
        return userDOB;
    }

    public void setUserDOB(Date userDOB) {
        this.userDOB = userDOB;
    }

    public String getUserCountry() {
        return userCountry;
    }

    public void setUserCountry(String userCountry) {
        this.userCountry = userCountry;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String[] getPreferredNewsCategory() {
        return preferredNewsCategory;
    }

    public void setPreferredNewsCategory(String[] preferredNewsCategory) {
        this.preferredNewsCategory = preferredNewsCategory;
    }
}
