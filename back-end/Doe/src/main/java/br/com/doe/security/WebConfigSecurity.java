package br.com.doe.security;

import br.com.doe.core.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.core.GrantedAuthorityDefaults;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler;


@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class WebConfigSecurity {
    @Autowired
    LoginService login;


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws  Exception{
        http.csrf().disable()
                .authorizeHttpRequests()
                .antMatchers(HttpMethod.POST, "/usuarios").permitAll()
                .antMatchers("/teste").authenticated()
                .antMatchers("/login").permitAll().and().httpBasic()
                .and().logout(logout -> logout.invalidateHttpSession(true)
                                .deleteCookies().clearAuthentication(true)
                                .logoutSuccessHandler(new HttpStatusReturningLogoutSuccessHandler(HttpStatus.OK)));
        return http.build();
    }


//    @Bean
//    public DaoAuthenticationProvider authenticationProvider(){
//        DaoAuthenticationProvider a = new DaoAuthenticationProvider();
//        a.setUserDetailsService(login);
//        a.setPasswordEncoder(passwordEncoder());
//        return a;
//    }
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    GrantedAuthorityDefaults grantedAuthorityDefaults() {
        return new GrantedAuthorityDefaults("");
    }

}
